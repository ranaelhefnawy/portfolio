import React from 'react'

const topbutton = (props) => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if(!document.getElementById("myBtn").classList.contains("btnEntrance")) {
            document.getElementById("myBtn").classList.remove("btnExit");
            document.getElementById("myBtn").classList.add("btnEntrance");
            document.getElementById("myBtn").style.display = "block";
        }
      } else {
        if(document.getElementById("myBtn").classList.contains("btnEntrance")) {
            document.getElementById("myBtn").classList.remove("btnEntrance");
            document.getElementById("myBtn").classList.add("btnExit");
            setTimeout(function() {
                document.getElementById("myBtn").style.display = "none";
            }, 250);
        }
      }
    }

    const topFunction = () => {
      window.scrollTo(0,0);
    }

    return (
        <button onClick={topFunction} id="myBtn">
          <i className="fa fa-angle-double-up"></i>
        </button>
    )
}

export default topbutton
