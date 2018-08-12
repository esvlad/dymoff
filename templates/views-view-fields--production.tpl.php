<? if(is_mobile() === true) : ?>
  <div class="slider_text" data-sl-step="<?=$id;?>"  style="background: url(/sites/default/files/styles/large/public/<?= str_replace('public://','',$row->field_field_image[0]['raw']['uri']); ?>) no-repeat;">
    <div class="number_slide"><?=$id;?></div>
    <div class="sl_step">этап</div>
    <h3><?=$row->node_title;?></h3>
    <?=$row->field_body[0]['raw']['value'];?>
    <div class="pr_more" id="pr_more_view">Почитать подробнее</div>
    <div class="pr_more_block">
      <div class="pr_more_close" id="close"></div>
      <div class="pr_more_box">
        <?=$row->field_field_pr_more[0]['raw']['value'];?>
      </div>
    </div>
  </div>
<? else : ?>
  <? if($id == 1) : ?>
    <div class="slider_text active" data-sl-step="1">
  <? else : ?>
    <div class="slider_text" data-sl-step="<?=$id;?>">
  <? endif; ?>
    <h3><?=$row->node_title;?></h3>
    <?=$row->field_body[0]['raw']['value'];?>
    <div class="pr_more" id="pr_more_view">Почитать подробнее</div>
    <div class="pr_more_block">
      <div class="pr_more_close" id="close"></div>
      <div class="pr_more_box">
        <?=$row->field_field_pr_more[0]['raw']['value'];?>
      </div>
    </div>
  </div>

  <? if($id == 1) : ?>
    <div class="products_image active" style="background: url(/sites/default/files/<?= str_replace('public://','',$row->field_field_image[0]['raw']['uri']); ?>) no-repeat;" data-src-large="/sites/default/files/styles/large/public/<?= str_replace('public://','',$row->field_field_image[0]['raw']['uri']); ?>" data-product-id="1"></div>
    <!--<img class="products_image active" src="/sites/default/files/<?= str_replace('public://','',$row->field_field_image[0]['raw']['uri']); ?>" data-product-id="1"/>
    -->
  <? else : ?>
    <div class="products_image" style="background: url(/sites/default/files/<?= str_replace('public://','',$row->field_field_image[0]['raw']['uri']); ?>) no-repeat;" data-src-large="/sites/default/files/styles/large/public/<?= str_replace('public://','',$row->field_field_image[0]['raw']['uri']); ?>" data-product-id="<?=$id;?>"></div>
    <!--<img class="products_image" src="/sites/default/files/<?= str_replace('public://','',$row->field_field_image[0]['raw']['uri']); ?>" data-product-id="<?=$id;?>"/>
    -->
  <? endif; ?>
<? endif; ?>
