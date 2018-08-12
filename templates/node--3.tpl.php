

<section class="sect company_document">
  <div class="wrapper">
    <div class="content clearfix">
      <ul class="breadcrumbs clearfix">
        <li><a href="../" target="_self">Главная</a></li>
        <li><a href="../company" target="_self">О компании</a></li>
      </ul>
      <? if($is_admin) : ?>
        <h3 class="edit_node">
          <a href="#overlay=node/<?=$node->nid;?>/edit">Редактировать</a>
        </h3>
      <? endif; ?>
      <h2><span>Документы </span><span class="red">и сертификаты</span></h2>
      <div class="view_documents">
        <? for($i = 0; $i < count($node->field_documents['und']); $i++): ?>
          <? if($i == 1 || $i == 6 || $i == 12) : ?>
            <div class="view_docs view_docs_w2">
              <a class="cboxElements colorbox-load" href="/sites/default/files/<?= str_replace('public://','',$node->field_documents['und'][$i]['uri']); ?>">
                <img src="/sites/default/files/<?= str_replace('public://','',$node->field_documents['und'][$i]['uri']); ?>" alt=""/>
              </a>
            </div>
          <? else : ?>
            <div class="view_docs">
              <a class="cboxElements colorbox-load" href="/sites/default/files/<?= str_replace('public://','',$node->field_documents['und'][$i]['uri']); ?>">
                <img src="/sites/default/files/<?= str_replace('public://','',$node->field_documents['und'][$i]['uri']); ?>" alt=""/>
              </a>
            </div>
          <? endif; ?>
        <? endfor; ?>
      </div>
    </div>
  </div>
</section>