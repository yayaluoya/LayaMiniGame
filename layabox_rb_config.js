module.exports = {
    /** loader列表 */
    loader: [pakoLoader],
};


function pakoLoader(_url, _stream) {
    return new Promise((r) => {
        //
        r(_stream);
    });
}