<template>
<!-- Sidebar -->
<ul class="navbar-nav bg-custom-color sidebar sidebar-dark accordion" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="">
  <div class="sidebar-brand-icon ">
    <img src="@\assets\EventPluse_blanc.png" alt="Bootstrap" width="40" height="30">
  </div>
  <div class="sidebar-brand-text mx-3">EP Admin </div>
</a>

<!-- Divider -->
<hr class="sidebar-divider my-0">

<!-- Nav Item - Dashboard -->
<li class="nav-item active">
  <router-link to="/">
    <a class="nav-link" href="">
      <i class="fas fa-fw fa-tachometer-alt"></i>
      <span>Dashboard</span></a>
  </router-link>
</li>

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
  Interface
</div>

<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
    aria-controls="collapseTwo">
    <i class="fas fa-fw fa-box"></i>
    <span>Événements</span>
  </a>
  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <h6 class="collapse-header"> </h6>
      <router-link to="/listeevents">
        <a class="collapse-item" href="ListeEvent">Liste des Événements</a> 
      </router-link>
      <router-link to="/ajouterevent"> 
        <a class="collapse-item" href="AjouterEvent">Nouvel Événement</a>
      </router-link>
    </div>
  </div>
</li>

<!-- Nav Item - Utilities Collapse Menu -->
<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
    aria-expanded="true" aria-controls="collapseUtilities" style="color: white;">
    <i class="fas fa-fw fa-user"></i>
    <span>Visiteurs</span>
  </a>
  <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <h6 class="collapse-header"></h6>
      <router-link to="/listevisiteurs">
        <a class="collapse-item" href="utilities-color.html">Liste des Visiteurs</a> </router-link>
      <router-link to="">
        <a class="collapse-item" href="utilities-border.html">Favoris Clients</a> </router-link>
    </div>
  </div>
</li>
<!-- Nav Item - Utilities Collapse Menu -->
<!--villes-->
<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCustom2"
    aria-expanded="true" aria-controls="collapseCustom2">
    <i class="fas fa-fw fa-folder"></i>
    <span>Villes</span>
  </a>
  <div id="collapseCustom2" class="collapse" aria-labelledby="headingCustom" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <h6 class="collapse-header"></h6>
      <router-link to="/listevilles">
        <a class="collapse-item" href="#">Liste des Villes</a>
     </router-link>
       </div>
  </div>
</li>
<!-- Nav Item - Utilities Collapse Menu 
<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCustom"
    aria-expanded="true" aria-controls="collapseCustom">
    <i class="fas fa-fw fa-shopping-cart"></i>
    <span>Fournisseurs</span>
  </a>
  <div id="collapseCustom" class="collapse" aria-labelledby="headingCustom" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <h6 class="collapse-header">Custom Collapse:</h6>
      <router-link to="/ListeFournisseurs">
        <a class="collapse-item" href="#">Liste des Fournisseurs</a> </router-link>
      <router-link to="/CommandesFournisseurs">
        <a class="collapse-item" href="#">Commandes Fournisseurs</a> </router-link>
    </div>
  </div>
</li> -->
<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCustom2"
    aria-expanded="true" aria-controls="collapseCustom2">
    <i class="fas fa-fw fa-folder"></i>
    <span>Catégories</span>
  </a>
  <div id="collapseCustom2" class="collapse" aria-labelledby="headingCustom" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <h6 class="collapse-header"></h6>
      <router-link to="/listecategories">
        <a class="collapse-item" href="#">Liste des Catégories</a>
     </router-link>
       </div>
  </div>
</li>


<!-- Divider -->
<hr class="sidebar-divider">


<!-- Divider -->

<!-- Sidebar Toggler (Sidebar) -->
<div class=" nav-link text-center d-none d-md-inline" data-widget="pushmenu">
  <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>
<!-- End of Sidebar -->
</template>

<style>
.bg-custom-color{
  background-color: #ae71d1;
}
</style>