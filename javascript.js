//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});


// src/components/Header.js
import React from 'react';
import videoIndonesia from '../assets/video-indonesia.mp4';

const Header = () => {
    return (
        <header id="home">
            <div className="overlay"></div>
            <video autoPlay muted loop>
                <source src={videoIndonesia} type="video/mp4" />
            </video>
            <div className="intro">
                <h3>Visit Indonesia</h3>
                <p>
                    Silahkan datang ke Indonesia karena kamu akan merasa nyaman serta aman dinegara ini.
                </p>
                <p>
                    <a href="#aboutus" className="tombol">MORE INFO</a>
                </p>
            </div>
        </header>
    );
};


// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './index.css'; // Import your global CSS

function App() {
    return (
        <div className="layar-penuh">
            <Navbar />
            <main>
                <Header />
                <AboutUs />
                <Support />
                <Gallery />
                <Quote />
                <Team />
                <Blog />
            </main>
            <Footer />
        </div>
    );
}

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Penting: import CSS global di sini

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// ...existing code...

// Dropdown toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('dropdownToggle');
  const menu = document.getElementById('dropdownMenu');

  // Show/hide dropdown on button click
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', function () {
    menu.classList.remove('show');
  });

  // Optional: handle language selection
  menu.querySelectorAll('li').forEach(function (item) {
    item.addEventListener('click', function () {
      // You can add language switch logic here
      toggle.innerHTML = item.innerHTML;
      menu.classList.remove('show');
    });
  });
});

// ...existing code...

// ...existing code...

// Enable download on gallery image click
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#gallery div img').forEach(function(img) {
    img.addEventListener('click', function(e) {
      const link = document.createElement('a');
      link.href = img.src;
      link.download = img.src.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
});

// ...existing code...

function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

function setLanguage(lang) {
  alert("Bahasa dipilih: " + (lang === 'id' ? "Indonesia" : "English"));
  // Di sini bisa ditambahkan logika untuk mengubah bahasa situs
  document.getElementById("dropdown").classList.remove("show");
}

// Menutup dropdown jika klik di luar
window.onclick = function(event) {
  if (!event.target.matches('#dropdownButton') && !event.target.closest('.language-selector')) {
    document.getElementById("dropdown").classList.remove("show");
  }
};

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');
  const zoomIn = document.getElementById('zoomIn');
  const zoomOut = document.getElementById('zoomOut');
  let scale = 1;

  document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = "block";
      modalImg.src = this.src;
      scale = 1;
      modalImg.style.transform = `scale(${scale})`;
    });
  });

  closeModal.onclick = function() {
    modal.style.display = "none";
  };

  zoomIn.onclick = function() {
    scale += 0.2;
    modalImg.style.transform = `scale(${scale})`;
  };

  zoomOut.onclick = function() {
    if (scale > 0.4) {
      scale -= 0.2;
      modalImg.style.transform = `scale(${scale})`;
    }
  };

  // Tutup modal jika klik di luar gambar
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
// ...existing code...