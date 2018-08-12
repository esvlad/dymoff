<div class="news_block news_list_<?= my_list_element($id); ?>" data-id="<?=$id;?>">
  <a href="../news/<?=$row->nid;?>">
    <? if(!empty($row->field_field_image[0])) : ?>
      <div class="news_block__images">
        <img src="/sites/default/files/styles/preview_news/public/news/image/<?=$row->field_field_image[0]['raw']['filename'];?>" alt="<?=$row->field_field_image[0]['raw']['alt'];?>"/>
        <? if(!empty($row->field_field_news_type[0])) : ?>
          <p class="news_block__type"><?=$row->field_field_news_type[0]['rendered']['#markup'];?></p>
        <? endif; ?>
      </div>
    <? endif; ?>
    <div class="news_block__caption">
      <h6 class="news_date"><?=date_creat_normal($row->node_created);?></h6>
      <h2 class="news_title"><?=$row->node_title;?></h2>
      <p class="news_annotation"><?=$row->field_body[0]['raw']['summary'];?></p>
    </div>
  </a>
</div>
