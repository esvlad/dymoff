<section class="sect vacancy">
  <div class="wrapper">
    <div class="content clearfix">
      <h2><span>Вакансии</span></h2>
      <div class="vacancy_list clearfix">
      	<?=$rows;?>
      </div>
      <div class="vacancy_sub">
        <p class="vacancy_sub__title">Подпишитесь на&nbsp;рассылку, чтобы получать уведомления о&nbsp;новых вакансиях!</p>
        <form class="vacancy_sub__form" id="vacsub_form">
          <div class="vacancy_sub__form_input">
            <? if(is_mobile() === true) : ?>
              <input type="text" value="" placeholder="Проcто введите email" required />
            <? else : ?>
              <input type="text" value="" placeholder="Проcто введите email и нажмите enter" required/>
            <? endif; ?>
          </div>
          <input class="mb_visible" type="submit" value="Отправить" />
        </form>
      </div>
    </div>
  </div>
  <? if(is_mobile() === true) : ?>
    <div id="vc_form" class="popup fixed popup_vc_form">
  <? else : ?>
    <div id="vc_form" class="popup popup_vc_form">
  <? endif; ?>
    <div class="popup_close"></div>
    <div class="popup_box clearfix">
      <h3>Отправка резюме на&nbsp;вакансию “<span id="vc_name">Инженер</span>”</h3>
      <? $block = module_invoke('webform', 'block_view', 'client-block-4');
                  print render($block['content']); ?>
    </div>
  </div>
</section>