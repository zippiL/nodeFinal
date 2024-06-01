import LinksModel from '../collection/links.js';
import UsersModel from '../collection/users.js';

const LinksController = {
    getLinks: async (req, res) => {
        try {
            const links = await LinksModel.find();
            console.log(links)
            res.status(200).json(links);
        } catch (error) {
            console.error("Error retrieving users:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    getByIDLinks: async (req, res) => {
        try {
            const linkId = req.params.id;
            const link = await LinksModel.findById(linkId);
            const targetParamValue = req.query[link.targetParamName];

            console.log("linkbyid",req.ip)
            link.clicks.push({
                insertedAt: Date.now(),
                ipAddress: req.ip,
                targetParamName:targetParamValue
              });
              await link.save();
 
            if (link) {
                // res.status(200).send(link);
                res.redirect(link.originalUrl);

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
            const { userId, originalUrl, targetParamName, targetValues } = req.body;
            const link={
                originalUrl,
                targetParamName: targetParamName || "t",
                targetValues: targetValues || []
            }
            const linksToAdd = new LinksModel(link);
            await linksToAdd.save();
            const user = await UsersModel.findById(userId);
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
        
            user.links.push(link._id);
            await user.save();
        
            const shortUrl= `http://localhost:3000/links/${linksToAdd._id}`;
            res.status(200).send(shortUrl);
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
    },
    getClicks:async(req,res)=>{
        try{
            const link=LinksModel.findById(req.params.id)
            if(!link)
                res.status(400).send("notLink")
            const clicksBySource = {};

            link.targetValues.map((source) => {
                clicksBySource[source.name] = clicks.filter((click) => click.targetParamValue === source.value).length;
              });
              res.status(200).send(clicksBySource)
        }catch (error) {
            console.error("Error deleting link data:", error);
            res.status(500).send("Internal Server Error");
        }
    }
};

export default LinksController;
