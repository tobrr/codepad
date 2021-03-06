/*jshint esnext: true */

module.exports = function(file, search, replace, callback) {

    var fullpath = ß.projectdir + file;

    ß.fs.readFile(fullpath, 'utf-8', function(err, data) {
        if (err) {
            đ(err);
            ß.err(projectfile + ' ' + err.code);
            ß.lib.projectfiles.opntc("ERROR in readFile " + file + ' ' + err.code);
            return callback(err, 'Error while reading the file.');
        }

        var that = data.split(search).join(replace);

        ß.fs.writeFile(fullpath, that, function(err) {
            if (err) {
                đ(err);
                ß.err(projectfile + ' ' + err.code);
                ß.lib.projectfiles.opntc("ERROR in writeFile " + file + ' ' + err.code);
                return callback(err, 'Error while writing the file.');
            }

            if (ß.projectfiles[file])
                if (ß.projectfiles[file].editor) ß.projectfiles[file].editor.updateDocServerOperation(that);

            return callback(null, 'OK');
        });
    });
};