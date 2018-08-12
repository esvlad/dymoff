<section class="sect company">
  <div class="wrapper">
    <div class="content clearfix">
      <? if($is_admin) : ?>
        <h3 class="edit_node">
          <a href="#overlay=node/<?=$node->nid;?>/edit">Редактировать</a>
        </h3>
      <? endif; ?>
      <h2><span><?= $node->title; ?></span></h2>
      <h3 class="link_docs"><a href="../company/documents" target="_self">Документы и благодарности</a></h3>
      <div class="cc_views clearfix" id="company_content">
        <ul class="cc_pins">
          <div class="arrow_slide">
            <div class="arrow_slide_btn" data-arrow-btn="prev" data-cc-block="4" data-cc-enabled="false"></div>
            <div class="arrow_slide_btn" data-arrow-btn="next" data-cc-block="2" data-cc-enabled="true"></div>
          </div>
          <li class="cc_pin active" data-cc-block="1"></li>
          <li class="cc_pin" data-cc-block="2"></li>
          <li class="cc_pin" data-cc-block="3"></li>
          <li class="cc_pin" data-cc-block="4"></li>
        </ul>
        <? for($i = 0; $i < count($node->field_cc_view_block_text['und']); $i++) : ?>
          <? if($i == 0) : ?>
            <div class="cc_view_block active" id="cc_view" data-cc-block="1">
          <? else : ?>
            <div class="cc_view_block" id="cc_view" data-cc-block="<?= $i+1; ?>">
          <? endif; ?>
            <div class="cc_view_block_images">
              <img src="/sites/default/files/company/<?=$node->field_cc_view_block_images['und'][$i]['filename'];?>"/>
            </div>
            <div class="cc_view_block_text">
              <?=$node->field_cc_view_block_text['und'][$i]['value'];?>
            </div>
          </div>
        <? endfor; ?>
      </div>
    </div>
  </div>
</section>