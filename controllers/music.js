// Create
function create(req, res) {
    res.json({ message: 'you created a music' });
};
// Retrieve
function retrieveAll(req, res) {
    res.json({ message: 'you retrieved all musics'});
};

// Update
function update(req, res) {
    res.json({ message: 'you updated a music' });
};

// Delete
function deletes(req, res) {
    res.json({ message: 'you deleted a music' });
};

// export controllers

module.exports = {
    create,
    retrieveAll,
    update,
    deletes,
}