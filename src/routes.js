const addNoteHandlers = require("./addNoteHandler");

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandlers,
    },
];

module.exports = routes;