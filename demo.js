function getId(f1)
{
    console.log("fetching id");
      setTimeout( function(){
                            f1(1001);
                            console.log("fetched id");
                 });
          
}
function getUsn(id,f2)
{
    console.log("fetching usn");
    setTimeout( function(){
                          f2("CS"+id);
                          console.log("fetched usn");
               });

}
function getUser(usn,f3)
{
    console.log("fetching details");
    setTimeout( function(){
                          f3(usn+"name:taj branch Cs");
                          console.log("fetched details");
               },5000);

}
function main()
{
    console.log("start of main");
    getId(function(id){
                    getUsn(id,function(usn){
                            getUser(usn,function(det){
                                    console.log("details:  "+det);
                            });
                    });
                });
    console.log("end of main");

       
}
main();