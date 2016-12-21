

 /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# in html doc

 <input type="button" onclick="rageHelper()" value="Helper">
 
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


   function rageHelper()
   {
      var head= document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/rageHelper.js';
        head.appendChild(script);
    }


 /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -       
   The script file being loaded looks something like this:

   function rageHelper()
   {
     :
     lots of code
     :
   }

   :
   more function and global variable definitions
   :

   rageHelper();
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

