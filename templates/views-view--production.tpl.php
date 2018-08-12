<? if(is_mobile() === true) : ?>
  <section class="sect production production_mobile">
<? else : ?>
  <section class="sect production">
<? endif; ?>
  <div class="wrapper">
    <div class="content clearfix">
      <h2><span class="white">Производство</span></h2>
      <? if(is_mobile() === true) : ?>
        <?= $rows; ?>
      <? else : ?>
        <div class="slider_info">
          <ul class="slider_info_dots">
            <div class="arrow_slide">
              <div class="arrow_slide_btn" data-arrow-btn="prev" data-cc-block="5" data-cc-enabled="false"></div>
              <div class="arrow_slide_btn" data-arrow-btn="next" data-cc-block="2" data-cc-enabled="true"></div>
            </div>
            <li class="sl_pin active" data-sl-id="1"></li>
            <li class="sl_pin" data-sl-id="2"></li>
            <li class="sl_pin" data-sl-id="3"></li>
            <li class="sl_pin" data-sl-id="4"></li>
            <li class="sl_pin" data-sl-id="5"></li>
          </ul>
          <div class="number_slide active">1</div>
          <div class="sl_step">этап</div>
        </div>
        <?= $rows; ?>
      <? endif; ?>
    </div>
  </div>
</section>