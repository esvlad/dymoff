<section class="sect contacts page">
  <div class="wrapper">
    <div class="content clearfix">
      <? if($is_admin) : ?>
        <h3 class="edit_node">
          <a href="#overlay=node/<?=$node->nid;?>/edit">Редактировать</a>
        </h3>
      <? endif; ?>
      <h2><span><?= $node->title; ?></span></h2>
      <div class="block_company_name">
        <h1><?= $node->field_cname['und'][0]['value']; ?></h1>
        <p><?= $node->field_csname['und'][0]['value']; ?></p>
      </div>
      <div class="address_info clearfix">
        <div class="address_info_col address_info__phone">
          <h3>Телефоны</h3>
          <?= $node->field_cphone['und'][0]['value']; ?>
        </div>
        <div class="address_info_col address_info__addr">
          <h3>Адрес</h3>
          <?= $node->field_caddress['und'][0]['value']; ?>
        </div>
        <div class="address_info_col address_info__mail">
          <h3>Почта</h3>
          <?= $node->field_cemail['und'][0]['value']; ?>
        </div>
      </div>
      <div class="yamaps_contact">
        <div id="myMap"></div>
        <script src="/sites/all/themes/dymoff/js/yaMaps.js"></script>
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
              <input class="popup_box__form_input form_name success" type="text"/><span class="success_form"></span><span class="error_msg">Пожалуйста, введите имя</span>
            </div>
            <div class="form-item">
              <label class="control-label">Номер телефона</label>
              <input class="popup_box__form_input form_phone error" type="text"/><span class="error_msg">Пожалуйста, укажите номер</span><span class="success_form"></span>
            </div>
            <div class="form-actions">
              <input class="webform-submit" type="submit" value="Отправить" />
            </div>
          </div>
        </form>-->
      </div>
    </div>
  </div>
</section>