import React from 'react'

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Exam quiz</a>
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">English</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Bangla</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">GK</a>
              </li>
              
            </ul>
           
          </div>
        </div>
    </nav>
    )
}

export default Nav
