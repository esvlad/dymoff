<? //$row->field_body[0]['raw']['value']; ?>
<div class="vacancy_block" data-vacancy-id="<?=$row->nid;?>">
  <div class="vacancy_block_block">
    <h3 class="vacancy_block__title"><?=$row->node_title;?></h3>
    <?=$row->field_body[0]['rendered']['#markup']; ?>
    <p class="vacancy_block__more" id="vc_more">Читать подробнее</p>
    <div class="button vacancy_block__button" id="send_resume">Отправить резюме</div>
  </div>
  <? if(is_mobile() === true) : ?>
    <div class="popup fixed vacancy_block_popup" data-vacancy-id="<?=$row->nid;?>">
  <? else : ?>
    <div class="popup vacancy_block_popup" data-vacancy-id="<?=$row->nid;?>">
  <? endif; ?>
  	<div class="popup_close"></div>
  	<h3 class="vacancy_block__title"><?=$row->node_title;?></h3>
  	<?=$row->field_body[0]['raw']['value']; ?>
  	<div class="button vacancy_block__button" id="send_resume">Отправить резюме</div>
  </div>
</div>