<template>
   <header>
    <nav class="container-fluid">
        <div id="logo"><router-link to="/"><img src="../assets/images/logo.jpeg" alt="蝴蝶seba"></router-link></div>

        <label for="drop" class="toggle"><i class="bi bi-list"></i></label>
        <input type="checkbox" id="drop" />
            <ul class="menu">
                <li><a><router-link to="/">夜蝴蝶館</router-link></a></li>
                <li><a><router-link to="/about">關於蝴蝶</router-link></a></li>
                <li><a><router-link to="/contact">聯絡蝴蝶</router-link></a></li>
                <li><a><router-link to="/product">文字世界</router-link></a></li>
                <li><a><router-link to="/signup">會員註冊</router-link></a></li>
                <li><a><router-link to="/login">會員登入</router-link></a></li>


                <li>
                    <!-- First Tier Drop Down -->
                    <label for="drop-1" class="toggle">會員專區</label>
                    <a><router-link to="#">會員專區</router-link></a>
                    <input type="checkbox" id="drop-1"/>
                    <ul class="submenu">
                        <li><a><router-link to="/member">會員資訊</router-link></a></li>
                        <li><a><router-link to="/favorite">最愛清單</router-link></a></li>
                        <li><a><router-link to="/cart">購物車</router-link></a></li>
                    </ul> 

                </li>

              
            </ul>
        </nav>

</header>



</template>


<style scope>
:root {
  --mainnavcolor:#5d5aae;
  --hover:#bfcffd;
  --fontcolor:#FFF;
}

body {
	line-height: 32px;
  margin: 0;
	padding: 0;
	word-wrap:break-word !important;
	}

nav .bi{
	background-color: var(--mainnavcolor);
	color: var(--fontcolor);

}


a, a:link, a:hover{
	color: var(--fontcolor);
}


#container {
	margin: 0 auto;
	max-width: 890px;
}

p {
	text-align: center;
}

.toggle,
[id^=drop] {
	display: none;
}

/* Giving a background-color to the nav container. */
nav { 
	margin:0;
	padding: 0;
	background-color: var(--mainnavcolor);
	color: var(--fontcolor);
  z-index: 1000;
}

router-link{
	color: var(--fontcolor);

}

#logo {
	display: block;
	float: left;
	font-size:20px;
	line-height: 60px;
  background-color: var(--mainnavcolor)
}

#logo img{
  width: 50px;
  height: 50px;
}

.menu {
  margin-top: 5px;
}

.submenu {
  margin-top: 10px;
}
/* Since we'll have the "ul li" "float:left"
 * we need to add a clear after the container. */

nav:after {
	content:"";
	display:table;
	clear:both;
}

/* Removing padding, margin and "list-style" from the "ul",
 * and adding "position:reltive" */
nav ul {
	float: right;
	padding:0;
	margin:0;
	list-style: none;
	position: relative;
  background-color: var(--mainnavcolor)
	}
	
/* Positioning the navigation items inline */
nav ul li {
	margin: 0px;
	display:inline-block;
	float: left;
	background-color: var(--mainnavcolor);
	}

/* Styling the links */
nav a {
	display:block;
	padding:10px 20px;	
	color:var(--fontcolor);
	font-size:17px;
	text-decoration:none;
  background-color: var(--mainnavcolor)
}


nav ul li ul li:hover { background: var(--hover); }

/* Background color change on Hover */
.menu a:hover { 
	background-color: var(--hover); 
}

/* Hide Dropdowns by Default
 * and giving it a position of absolute */
nav ul ul {
	display: none;
	position: absolute; 
	/* has to be the same number as the "line-height" of "nav a" */
	top: 55px; 
}
	
/* Display Dropdowns on Hover */
nav ul li:hover > ul {
	display:inherit;
}
	
/* Fisrt Tier Dropdown */
nav ul ul li {
	width:149px;
	float:none;
	display:list-item;
	position: relative;
}

/* Second, Third and more Tiers	
 * We move the 2nd and 3rd etc tier dropdowns to the left
 * by the amount of the width of the first tier.
*/
nav ul ul ul li {
	position: relative;
	top:-60px;
	/* has to be the same number as the "width" of "nav ul ul li" */ 
	left:170px; 
}

	
/* Change ' +' in order to change the Dropdown symbol */



/* Media Queries
--------------------------------------------- */

@media all and (max-width : 768px) {

	#logo {
		display: block;
		padding: 0;
		width: 100%;
		text-align: center;
		float: none;
	}

  label:hover {
		background-color: var(--mainnavcolor);

  }

  .submenu {
  margin-top: 10px;
}
	nav {
		margin: 0;
	}

	/* Hide the navigation menu by default */
	/* Also hide the  */
	.toggle + a,
	.menu {
		display: none;
	}

	/* Stylinf the toggle lable */
	.toggle {
		display: block;
		background-color: var(--mainnavcolor);
		padding:14px 20px;	
		color:var(--fontcolor);
		font-size:17px;
		text-decoration:none;
		border:none;
	}

	.toggle:hover {
		background-color: var(--hover);
	}

	/* Display Dropdown when clicked on Parent Lable */
	[id^=drop]:checked + ul {
		display: block;
	}

	/* Change menu item's width to 100% */
	nav ul li {
		display: block;
		width: 65%;
		}

	nav ul ul .toggle,
	nav ul ul a {
		padding: 0 40px;
	}

	nav ul ul ul a {
		padding: 0 80px;
	}

	.menu a:hover,
 	nav ul ul ul a {
		background-color: var(--hover);
	}
  
	nav ul li ul li .toggle,
	nav ul ul a,
  nav ul ul ul a{
		padding:14px 20px;	
		color:var(--fontcolor);
		font-size:17px; 
	}
  
  
	nav ul li ul li .toggle,
	nav ul ul a {
		background-color: var(--mainnavcolor); 
	}

	/* Hide Dropdowns by Default */
	nav ul ul {
		float: none;
		position:static;
		color: var(--fontcolor);
		/* has to be the same number as the "line-height" of "nav a" */
	}
		
	/* Hide menus on hover */
	nav ul ul li:hover > ul,
	nav ul li:hover > ul {
		display: none;
	}
		
	/* Fisrt Tier Dropdown */
	nav ul ul li {
		display: block;
		width: 100%;
	}

	nav ul ul ul li {
		position: static;
		/* has to be the same number as the "width" of "nav ul ul li" */ 

	}

}

@media all and (max-width : 330px) {

	nav ul li {
		display:block;
		width: 94%;
	}

}

</style>