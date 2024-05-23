import LinksModel from '../collection/links.js';

const LinksController = {
    getLinks: async (req, res) => {
        try {
            const links = await LinksModel.find();
            res.status(200).send(links);
        } catch (error) {
            console.error("Error retrieving users:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    getByIDLinks: async (req, res) => {
        try {
            const linksId = req.params.id;
            const link = await LinksModel.findById(linksId);
            if (link) {
                res.status(200).send(link);
            } else {
                res.status(404).send("Link not found");
            }
        } catch (error) {
            console.error("Error retrieving users:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    postLinks: async (req, res) => {
        try {
            const linksToAdd = new LinksModel(req.body);
            await linksToAdd.save();
            res.status(200).send(true);
        } catch (error) {
            console.error("Error adding link data:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    putLinks: async (req, res) => {
        const linksId = req.params.id;
        const linksToAdd = req.body;
        try {
            await LinksModel.findByIdAndUpdate(linksId, linksToAdd);
            res.status(200).send("Link data updated successfully!");
        } catch (error) {
            console.error("Error updating link data:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    deleteLinks: async (req, res) => {
        try {
            await LinksModel.findByIdAndDelete(req.params.id);
            res.status(200).send("Link deleted successfully!");
        } catch (error) {
            console.error("Error deleting link data:", error);
            res.status(500).send("Internal Server Error");
        }
    }
};

export default LinksController;
