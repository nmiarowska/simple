function slideSearch(){
    const form = document.getElementById("navbar-search");
    const input = document.getElementById("navbar-search-input");
    const width = getComputedStyle(input).width;

    if(width == '0px')                                          //jesli nie jest widoczny input
    {
        input.classList.toggle("navbar-search-input-active");
        return false;
    }else{
        if(input.value == '')                                   //jesli input pusty, to schowaj
        {
            input.classList.remove("navbar-search-input-active");
            return false;                                       //jesli input niepusty, wyslij
        }else{
            form.submit();
        }
        
    }
}

function slideSidebar(){
    const frame = document.getElementById("sidebar-menu-bg");
    const sidebar = document.getElementById("sidebar-menu");
    const tool = document.getElementById("sidebar-menu-tool");
    const opacity = getComputedStyle(tool).opacity;
    
    if(opacity == '0.5')
    {
        tool.classList.toggle("sidebar-menu-tool-active");
        sidebar.classList.toggle("sidebar-wrapper-hidden");
        frame.classList.toggle("sidebar-wrapper-hidden");
    }else{
        tool.classList.remove("sidebar-menu-tool-active");
        sidebar.classList.remove("sidebar-wrapper-hidden");
        frame.classList.remove("sidebar-wrapper-hidden");
    }
}