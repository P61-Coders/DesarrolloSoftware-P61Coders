/* SCRIPT PARA COMPORTAMIENTO DEL MENÚ DROPDOWN
    FUENTE: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown */

    /*  Fecha: 2021-09-17
        Autor: Alfonso Gallegos
        Descripción: Cuando el usuario presiona el botón, éste cambia entre
        mostrar/ocultar el contenido del menú.
    */            
    function mostrarOcultarMenuDesplegable() 
    {
        document.getElementById("myDropdown").classList.toggle("show");
    }            

    // Close the dropdown if the user clicks outside of it
    /*  Fecha: 2021-09-17
        Autor: Alfonso Gallegos
        Descripción: Cerrar el menú desplegable cuando el usuario hace
        clic en alguna parte fuera del menú.                
    */
    window.onclick = function(event) 
    {
        if (!event.target.matches('.dropbtn')) 
        {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) 
            {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) 
                {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
