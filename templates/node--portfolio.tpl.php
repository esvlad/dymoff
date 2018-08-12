<section class="sect portfolio views clearfix">
  <div class="wrapper">
    <div class="content clearfix">
      <ul class="breadcrumbs clearfix">
        <li><a href="../" target="_self">Главная</a></li>
        <li><a href="../portfolio" target="_self">Портфолио</a></li>
      </ul>
      <? if($is_admin) : ?>
        <h3 class="edit_node">
          <a href="#overlay=node/<?=$node->nid;?>/edit">Редактировать</a>
        </h3>
      <? endif; ?>
      <h3 class="pf_views__city red"><?=$node->field_city['und'][0]['taxonomy_term']->name;?></h3>
      <h2 class="pf_views__title"><?=$node->title;?> <span><?=$node->field_totitle['und'][0]['value'];?></span></h2>
      <? if(!empty($node->field_annotation['und'][0]['value'])) : ?>
        <p class="pf_views__annotation"><?=$node->field_annotation['und'][0]['value']?></p>
      <? endif; ?>
      <img class="pf_views__image" src="/sites/default/files/<?= str_replace('public://','',$node->field_image['und'][0]['uri']); ?>" alt="<?=$node->field_image['und'][0]['alt']?>"/>
      <div class="pf_views__view clearfix">
        <div class="pf_views__view_row">
          <div class="pf_views__view__col">
            <?=typografy($node->body['und'][0]['value']);?>
          </div>
          <div class="pf_views__view__col pfv_facts">
            <?=typografy($node->field_facts['und'][0]['value']);?>
          </div>
        </div>
        <? if(!empty($node->field_gallery['und'])) : ?>
          <div class="pf_views__view_row">
            <div class="pf_views__view__gallery">
              <div class="fadeOut fadeIn owl-carousel" id="owl_carousel">
              <? foreach ($node->field_gallery['und'] as $field_gallery_image) : ?>
                <img src="/sites/default/files/<?= str_replace('public://','',$field_gallery_image['uri']); ?>"/>
              <? endforeach; ?>
              </div>
              <div class="pf_views__view__gallery_numbers">
                <p>Фото<span class="red"><span id="is">1</span><span>из</span><span id="all"><?=count($node->field_gallery['und']);?></span></span></p>
              </div>
            </div>
          </div>
        <? endif; ?>
        <? if(!empty($node->field_additional_text['und'][0]['value'])) : ?>
          <div class="pf_views__view_row">
            <div class="pf_views__view__col_100">
              <?=typografy($node->field_additional_text['und'][0]['value']);?>
            </div>
          </div>
        <? endif; ?>
      </div>
    </div>
  </div>
</section>