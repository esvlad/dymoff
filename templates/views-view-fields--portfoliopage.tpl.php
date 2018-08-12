<? if($id == 6) : ?>
  <div class="portfolio_content" data-id="<?=$id;?>">
    <a class="pc_block" href="../portfolio/<?=$row->nid;?>" target="_self">
      <div class="pc_block__images">
        <img src="/sites/default/files/<?= str_replace('public://','',$row->field_field_image[0]['raw']['uri']); ?>" alt="<?=$row->field_field_image[0]['raw']['alt'];?>"/>
      </div>
      <div class="pc_block__caption clearfix">
        <h6 class="pc_geografy"><?=$row->field_field_city[0]['rendered']['#markup'];?></h6>
        <h2 class="pc_title"><?=$row->node_title;?></h2>
        <div class="pc_params">
          <p class="pc_params__height">Высота <span class="red"><?=$row->field_field_pc_params_height[0]['rendered']['#markup'];?></span></p>
          <p class="pc_params__diameter">Диаметр <span class="red"><?=$row->field_field_pc_params_diameter[0]['rendered']['#markup'];?></span></p>
          <? if(!empty($row->field_field_pc_params_other[0])) : ?>
            <p class="pc_params__other"><?=$row->field_field_pc_params_other[0]['rendered']['#markup'];?></p>
          <? endif; ?>
        </div>
        <div class="button pc_block__view_btn">Подробнее</div>
      </div>
    </a>
  </div>
<? else : ?>
<div class="portfolio_content pf_conent_sorted" data-id="<?=$id;?>">
  <a class="pc_block" href="../portfolio/<?=$row->nid;?>" target="_self">
    <div class="pc_block__images">
      <img src="/sites/default/files/styles/preview_pf/public/<?= str_replace('public://','',$row->field_field_image[0]['raw']['uri']); ?>" alt="<?=$row->field_field_image[0]['raw']['alt'];?>"/>
      <div class="pc_block_hovers">
        <div class="button pc_block__view_btn">Подробнее</div>
      </div>
    </div>
    <div class="pc_block__caption clearfix">
      <h6 class="pc_geografy"><?=$row->field_field_city[0]['rendered']['#markup'];?></h6>
      <h2 class="pc_title"><?=$row->node_title;?></h2>
      <div class="pc_params">
        <p class="pc_params__height">Высота <span class="red"><?=$row->field_field_pc_params_height[0]['rendered']['#markup'];?></span></p>
        <p class="pc_params__diameter">Диаметр <span class="red"><?=$row->field_field_pc_params_diameter[0]['rendered']['#markup'];?></span></p>
      </div>
    </div>
  </a>
</div>
<? endif; ?>