
function hasDependency(
  depName: any,
  dependencies: any,
  devDependencies: any
) {
  return dependencies[depName] || devDependencies[depName];
}
const fetchlang = async(login:string,name:string,token:string)=>{
  const url = `https://api.github.com/repos/${login}/${name}/languages`;
            
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  const datai = await response.json();
  return datai;
}
const CheckRepotech=async(login:string,name:string,token:string)=>{
      var url:string;
      var framework ;
      const tech = await fetchlang(login,name,token);
      
        url = `https://api.github.com/repos/${login}/${name}/contents/package.json`;
      
      // Helper function to check if a specific package is present in dependencies or devDependencies
    
        try {
          const response = await fetch(url, {
            headers: {
              Authorization: `token ${token}`,
            },
          });
          const data = await response.json();
  
          const content = Buffer.from(data.content, "base64").toString("utf-8");
          const packageJson = JSON.parse(content);
  
          console.log("Frameworks in package.json:", packageJson.dependencies);
          console.log("Scripts in package.json:", packageJson.scripts);
  
          const dependencies = packageJson.dependencies || {};
          const devDependencies = packageJson.devDependencies || {};
  
          // Detect frameworks
  
          if (
            hasDependency("vite", dependencies, devDependencies) &&
            hasDependency("react", dependencies, devDependencies)
          ) {
           framework ="Vite"
          } else if (
            hasDependency("react", dependencies, devDependencies) &&
            hasDependency("next", dependencies, devDependencies)
          ) {
            framework="Nextjs"
          } else if (hasDependency("react", dependencies, devDependencies)) {
            framework="Reactjs";
          } else if (
            hasDependency("vue", dependencies, devDependencies) &&
            hasDependency("nuxt", dependencies, devDependencies)
          ) {
            console.log(
              framework="Nuxtjs"
            );
          } else if (hasDependency("vue", dependencies, devDependencies)) {
            framework="Vuejs";
          } else if (
            hasDependency("@angular/core", dependencies, devDependencies)
          ) {
            framework="Angularjs";
          } else if (hasDependency("express", dependencies, devDependencies)) {
            console.log(
              framework="Nodejs"
            );
          } else {
            framework="Other";
          }
      
        } catch (err) {
          try {
           let datai = await fetchlang(login,name,token);
            if (datai.hasOwnProperty("PHP")) {
              framework="PHP"
            } else if (datai.hasOwnProperty("Python")) {
              try {
                var url1:string;
                
                  url1 = `https://api.github.com/repos/${login}/${name}/contents/requirements.txt`;
                const response = await fetch(url1, {
                  headers: {
                    Authorization: `token ${token}`,
                  },
                });
                const data = await response.json();
                console.log(data);
  
                const content = Buffer.from(data.content, "base64").toString(
                  "utf-8"
                );
  
                console.log(content);
                if (content.includes("django")) {
                  console.log("inside the django checker");
                  framework="Django";
                } else if (content.includes("Flask")) {
                  console.log("inside the flask checker");
                  framework="Flask";
                } else {
                  console.log("inside the other checker");
                  framework="Python"
                }
              } catch (err) {
                framework="Python";
              }
            } 
            else if(datai.hasOwnProperty("Java")){
              //try
              try{
              //api call
              var url2:string;
              
                url2 = `https://api.github.com/repos/${login}/${name}/contents/pom.xml`;
              const response = await fetch(url2, {
                headers: {
                  Authorization: `token ${token}`,
                },
              });
              const data = await response.json();
              console.log(data);
  
              const content = Buffer.from(data.content, "base64").toString(
                "utf-8"
              );
  
              if(content.includes("spring")||content.includes("spring-boot")){
               framework="Springboot";
              }
              else if (content.includes("serverlet")||content.includes("jakarta.servlet")){
              framework="Servlet";
              }
              else{
               framework="Java";
              }
            }
            catch(err){
              framework="Java";
            }
            //end 
            }
            else if (datai.hasOwnProperty("Go")) {
              framework="Go";
            }
            else if (datai.hasOwnProperty("C")) {
              framework="C";
            }
            else if (datai.hasOwnProperty("HTML")) {
              framework="html";
            } else if (datai.hasOwnProperty("JavaScript")) {
              framework="Nodejs"
            }
          
            else {
              framework="Other";
            }
            
          } catch (err) {
            console.log(err);
          }
        }
        return {framework,tech};
      }
      export default CheckRepotech;