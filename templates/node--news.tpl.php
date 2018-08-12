<section class="sect main_news views">
  <div class="wrapper">
    <div class="content clearfix">
      <ul class="breadcrumbs clearfix">
        <li><a href="../" target="_self">Главная</a></li>
        <li><a href="../news" target="_self">Новости</a></li>
      </ul>
      <? if($is_admin) : ?>
        <h3 class="edit_node">
          <a href="#overlay=node/<?=$node->nid;?>/edit">Редактировать</a>
        </h3>
      <? endif; ?>
      <? if(!empty($node->field_news_type['und'])) : ?>
        <h3 class="news_view__type red"><?=$node->field_news_type['und'][0]['taxonomy_term']->name;?></h3>
      <? endif; ?>
      <h2 class="news_view__title"><?=$node->title;?></h2>
      <h3 class="news_view__date"><?=date_creat_normal($node->created);?></h3>
      <? if(!empty($node->field_news_type['und'][0]['filename'])) : ?>
        <img class="news_view__image" src="/sites/default/files/news/image/<?=$node->field_image['und'][0]['filename'];?>" alt="<?=$node->title;?>"/>
      <? endif; ?>
      <div class="news_view__text clearfix">
        <?=typografy($node->body['und'][0]['value']);?>
        <? if(!empty($node->field_gallery['und'])) : ?>
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
        <? endif; ?>
      </div>
    </div>
  </div>
</section>