<? include('header.php'); ?>

<?
$node24 = node_load(24);
$node_view = node_view($node24);
$rendered_node = drupal_render($node_view);
?>

<? // $block_main_head_product = module_invoke('block', 'block_view', '5'); ?>
<? $block_main_head_product = module_invoke('views', 'block_view', 'mhp_block-block'); ?>
<section class="sect main_head_product">
  <div class="wrapper">
    <div class="mhp_gradient_circle"></div>
    <div class="content content_mhp clearfix">
      <?= $rendered_node; ?>
    </div>
    <? $block_mhp_list = block_load('block', '4'); 
       $block_content_mhp = _block_render_blocks(array($block_mhp_list)); ?>
    <div class="content content_mhp_list clearfix">
      <div class="mhp_list">
      <p><?=$block_content_mhp['block_4']->subject;?></p>
        <div class="mhp_list__link clearfix">
          <?=$block_content_mhp['block_4']->content['#markup'];?>
        </div>
      </div>
    </div>
  </div>
</section>

<? $block_main_history = module_invoke('block', 'block_view', '3'); ?>
<? // print_arr($block_main_history); ?>
<section class="sect main_history">
  <div class="wrapper">
    <div class="content">
      <h2> <span>Немного <span class="red">истории</span></span></h2>
      <div class="history_block clearfix">
        <?=$block_main_history['content'];?>
      </div>
    </div>
  </div>
</section>

<? $block_main_map_work = module_invoke('views', 'block_view', 'portfolio-block'); ?>
<? $block_term = dymoff_taxonomy_tree('pmap_project'); ?>
<section class="sect main_map_work">
  <div class="wrapper">
    <div class="content clearfix">
      <h2><span class="red">География </span><span>работ</span></h2>
      <div class="switch_map">
        <p>Показаны</p>
        <div class="switch_case">
          <span class="active" data-mw-type="projects">Проекты</span>
          <span data-mw-type="cities">Города</span>
        </div>
      </div>
      <div class="map_work">
        <img src="/sites/all/themes/dymoff/images/other/map_project.png"/>
        <div class="map_pins active" id="projects">
        </div>
        <div class="map_pins" id="cities">
        </div>
        <div class="all_pins">
          <? print render($block_main_map_work['content']); ?>
          <? if(!empty($block_term)) : ?>
            <? foreach($block_term as $terms) : ?>
              <div id="modal_map" class="mmw_pin mmw_pin_project term_notmb" data-code="px<?=$terms->tid;?>">
                <div class="hover_block hover_mmw" id="hover_modal_map" data-modal="px<?=$terms->tid;?>">
                    <?=$terms->description;?>
                    <p class="map_work_term_city"><?=$terms->name;?></p>
                </div>
              </div>
            <? endforeach; ?>
          <? endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>

<? $block_main_products = module_invoke('block', 'block_view', '1'); ?>
<section class="sect main_products">
  <div class="wrapper">
    <div class="content clearfix">
      <h2> <span>Трубы</span><span class="white">, которые мы изготовили</span></h2>
      <div class="mp_views clearfix">
        <?=$block_main_products['content'];?>
      </div>
    </div>
  </div>
</section>

<? $block_main_map_work = module_invoke('views', 'block_view', 'news-block'); ?>
<? print render($block_main_map_work['content']); ?>

<? $block_main_customers = module_invoke('block', 'block_view', '2'); ?>
<? $block_main_partners = module_invoke('block', 'block_view', '6'); ?>
<section class="sect main_customers">
  <div class="wrapper">
    <div class="content">
      <div class="wrapper">
        <h2 id="customer" data-customer="0"><span>Заказчики</span></h2>
        <h3 id="customer" data-customer="1">Партнеры</h3>
        <div class="customers_logo clearfix active" data-customer="0">
          <?=$block_main_customers['content'];?>
        </div>
        <div class="customers_logo clearfix" data-customer="1">
          <?=$block_main_partners['content'];?>
        </div>
      </div>
    </div>
  </div>
</section>
<?php // $block_ = module_invoke('views', 'block_view', 'map-block');?>
<? include('footer.php'); ?>