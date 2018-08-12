<section class="sect guarantees">
  <div class="wrapper">
    <div class="content clearfix">
      <? if($is_admin) : ?>
        <h3 class="edit_node">
          <a href="#overlay=node/<?=$node->nid;?>/edit">Редактировать</a>
        </h3>
      <? endif; ?>
      <h2><span><?=$node->title;?></span></h2>
      <p class="page_cation">Российский производитель&nbsp;&mdash; <span class="red">знак качества и&nbsp;надежности.</span><br>Компания &laquo;Дымофф&raquo; подтверждает это каждый день.</p>
      <div class="guarantees_text clearfix">
        <? foreach($node->field_gt_block['und'] as $gt_block) : ?>
          <div class="gt_block">
            <?= $gt_block['value']; ?>
          </div>
        <? endforeach; ?>  
      </div>
      <div class="contacts_form">
        <p class="contacts_form__title">Хотите поработать с&nbsp;нами?</p>
        <p class="contacts_form__caption">По&nbsp;условиям сотрудничества воспользуйтесь формой обратной связи или позвоните по&nbsp;телефону <span class="phone_bold">+7&nbsp;(3412)&nbsp;90-64-49</span></p>
        <? $block = module_invoke('webform', 'block_view', 'client-block-1');
                  print render($block['content']); ?>
        <!--<form class="webform-client-form">
          <div>
            <div class="form-item">
              <label class="control-label">Ваше имя</label>
              <input class="popup_box__form_input form_name" type="text"/>
            </div>
            <div class="form-item">
              <label class="control-label">Номер телефона</label>
              <input class="popup_box__form_input form_phone" type="text"/>
            </div>
            <div class="form-actions">
              <input class="webform-submit" type="submit"/>
            </div>
          </div>
        </form>-->
      </div>
    </div>
  </div>
</section>