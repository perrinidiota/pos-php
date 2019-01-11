<div class="content-wrapper">

<section class="content-header">

  <h1>

    Reportes de Afiliaciones


  </h1>

  <ol class="breadcrumb">

    <li><a href="inicio"><i class="fa fa-dashboard"></i> Inicio</a></li>
    
    <li class="active">Reportes de Afiliaciones y Aportes</li>

  </ol>
  
</section>


<section class="content">

  <div class="box">

    <div class="box-header with-border">

      <button type="button" class="btn btn-default pull-right" id="daterange-btn2">
      
        <span>
        
          <i class="fa fa-calendar"></i> Rango de fecha

        </span>

        <i class="fa fa-caret-down"></i>

      </button>

      <div class="box-tools pull-right"></div>

    </div>

    <div class="box-body">

      <div class="row">


        <div class="col-xs-12">

          <?php

            include "reportes/grafico-afiliaciones.php";


          ?>

        
        </div>

        <div class="col-md-6 col-xs-12">

          <?php

            include "reportes/grafico-eps.php";


          ?>
        
        
        </div>
      
      
      </div>


    </div>

    
  </div>

</section>

</div>
