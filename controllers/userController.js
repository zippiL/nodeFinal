import UsersModel from '../collection/users.js';

const UsersController = {
    getUsers: async (req, res) => {
        try {
            const Users = await UsersModel.find();
            res.send(Users);
        } catch (error) {
            console.error("Error retrieving users:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    getByIDUsers: async (req, res) => {
        try {
            const UsersId = req.params.id;
            const user = await UsersModel.findById(UsersId);
            if (user) {
                res.status(200).send(user);
            } else {
                res.status(404).send("user not found");
            }
        } catch (error) {
            console.error("Error retrieving users:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    postUsers: async (req, res) => {
        try {
            const UsersToAdd = new UsersModel(req.body);
            await UsersToAdd.save();
            res.status(200).send(true);
        } catch (error) {
            console.error("Error adding user data:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    putUsers: async (req, res) => {
        const UsersId = req.params.id;
        const UsersToAdd = req.body;
        try {
            await UsersModel.findByIdAndUpdate(UsersId, UsersToAdd);
            res.status(200).send("user data updated successfully!");
        } catch (error) {
            console.error("Error updating user data:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    deleteUsers: async (req, res) => {
        try {
            await UsersModel.findByIdAndDelete(req.params.id);
            res.status(200).send("user deleted successfully!");
        } catch (error) {
            console.error("Error deleting user data:", error);
            res.status(500).send("Internal Server Error");
        }
    }
};

export default UsersController;
