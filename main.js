
// work with the fs module
const fs = require('fs');

// build a template folder for a nodejs project
let buildNodeExpressTemplate = (projectName) => {

    if(fs.existsSync(`${__dirname}/../${projectName}`)){
        console.log('the project folder already exists');
    } else{

        // creation of main project folder
        fs.mkdir(`${__dirname}/../${projectName}`,(err=>{
            if(err) throw err;
            console.log(`the ${projectName} folder didn't exists but a new folder has been made with this name`);
            
            // creation of the views subfolder
            fs.mkdir(`${__dirname}/../${projectName}/views`,(err=>{
                if(err) throw err;
                console.log('views folder added');
            
                // creation of the html file in the views subfolder
                fs.readFile('html.txt','utf8',(err,data)=>{
                    if(err) throw err;        
                    fs.writeFile(`${__dirname}/../${projectName}/views/index.html`,data,'utf8',(err)=>{
                        if(err) throw err;
                        console.log('index html file made');
                    });
                });            
            })); // views folder
        })); // main folder
    
        // creation of the public subfolder
        fs.mkdir(`${__dirname}/../${projectName}/public`,(err=>{
            if(err) throw err;
            console.log('public folder added');

            // creation of styles subfolder
            fs.mkdir(`${__dirname}/../${projectName}/public/styles`,(err=>{
                if(err) throw err;

                // creation of the css file 
                fs.readFile('styles.txt','utf8',(err,data)=>{
                    if(err) throw err;        
                    fs.writeFile(`${__dirname}/../${projectName}/public/styles/style.css`,data,'utf8',(err)=>{
                        if(err) throw err;
                        console.log('css html file made');
                    });
                });
            })) // styles subfolder

            // creation of scripts subfolder
            fs.mkdir(`${__dirname}/../${projectName}/public/scripts/`,(err=>{
                if(err) throw err;

                // creation of the script javascript file 
                fs.readFile('script.txt','utf8',(err,data)=>{
                    if(err) throw err;        
                    fs.writeFile(`${__dirname}/../${projectName}/public/scripts/script.js`,data,'utf8',(err)=>{
                        if(err) throw err;
                        console.log('script js file made');
                    });
                });
            })) // scripts subfolder
        })); // end of public folder

        // creation of the config subfolder
        fs.mkdir(`${__dirname}/../${projectName}/config`,(err=>{
            if(err) throw err;
            console.log('config folder added');

            // creation of mongo connection file
            fs.readFile('mongo.txt','utf8',(err,data)=>{
                if(err) throw err;
                fs.writeFile(`${__dirname}/../${projectName}/config/connection.js`,data,'utf8',(err)=>{
                    if(err) throw err;
                    console.log('mongo connection file made');
                })
            })

        })); // config subfolder

        // creation of controllers subfolder
        fs.mkdir(`${__dirname}/../${projectName}/controllers`,(err=>{
            if(err) throw err;
            console.log('controllers folder added');

        })); // controllers subfolder
        
        // creation of models subfolder
        fs.mkdir(`${__dirname}/../${projectName}/models`,(err=>{
            if(err) throw err;
            console.log('models folder added');

        })); // models subfolder

        // creation of routes subfolder
        fs.mkdir(`${__dirname}/../${projectName}/routes`,(err=>{
            if(err) throw err;
            console.log('routes folder added');

            // creation of routes file
            fs.readFile('routes.txt','utf8',(err,data)=>{
                if(err) throw err;
                fs.writeFile(`${__dirname}/../${projectName}/routes/routes.js`,data,'utf8',(err)=>{
                    if(err) throw err;
                    console.log('routes file made');
                })
            })// routes file
        })); // routes subfolder
        
        // creation of .env file
        fs.readFile('blank.txt','utf8',(err,data)=>{
            if(err) throw err;
            fs.writeFile(`${__dirname}/../${projectName}/.env`,data,'utf8',(err)=>{
                if(err) throw err;
                console.log('dotenv file made');
            });
        }); // dotenv file

        // creation of readme file
        fs.readFile('blank.txt','utf8',(err,data)=>{
            if(err) throw err;
            fs.writeFile(`${__dirname}/../${projectName}/README.MD`,data,'utf8',(err)=>{
                if(err) throw err;
                console.log('readme file made');
            });
        }); // readme file

        // creation of gitignore file
        fs.readFile('gitignore.txt','utf8',(err,data)=>{
            if(err) throw err;
            fs.writeFile(`${__dirname}/../${projectName}/.gitignore`,data,'utf8',(err)=>{
                if(err) throw err;
                console.log('gitignore file made');
            });
        }); // gitignore file


        // creation of the server javascript file in the main folder
        fs.readFile('server.txt','utf8',(err,data)=>{
            if(err) throw err;        
            fs.writeFile(`${__dirname}/../${projectName}/server.js`,data,'utf8',(err)=>{
                if(err) throw err;
                console.log('server js file made');
            });
        }); // server.js file



    } // else statement
} // function statement

buildNodeExpressTemplate('test21213');
