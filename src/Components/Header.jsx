function header(){
    return(
        <div className="header">

            <header>
                <nav class="navbar navbar-expand-sm bg-info">
                    <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-font menu-item" aria-current="page" href="./index.html">Home</a>
                        </li>
                        </ul>
                    </div>  
                    </div>
                </nav>
                <br></br>
            </header>
            
        </div>
    )
}

export default header;