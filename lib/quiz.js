#!/usr/bin/env node

const path = require(path);
const fs = require(fs);
const CWD = process.cwd();
class Quiz{


   //1. 读取用户地址栏输入
    parseargvs(){
        let argvs = process.argvs;

    }

    //2.创建文件夹
    mkdir(dirname,donext){
        let dirname = dirname || "quize"+Date.now();
        let spec_path = path.resolve( path.join(__dirname,"/"+dirname) ); 
        if(fs.existsSync(spec_path)){
            console.log("文件夹"+dirname+"已经存在了");
            process.exit(1);
        }else{
            fs.mkdir(spec_path, (err) => {
                if (err) throw err;
                if(donext && typeof(donext) === "function"){
                    donext(spec_path);
                }
            });
        }
    }

    //3.copy模板
    


//如果用户输入的是quiz 则创建一个quiz20201005123045文件夹

//如果用户输入的是 quiz <文件夹名>


    init(){
       this.parseargvs();

    }

}

module.exports = new Quiz();
