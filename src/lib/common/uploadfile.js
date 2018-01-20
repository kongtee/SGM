/**
 * Created by hanguangtian on 2018/1/15.
 */
export default {
    getImgBase64(file, callback){
        var reader = new FileReader();
        let fileType = file.type || "application/" + file.name.split('.')[1];
        reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            callback("data:" + fileType + ";base64," + btoa(binaryString), file.name);
        };

        reader.readAsBinaryString(file);

        return false;
    }
}