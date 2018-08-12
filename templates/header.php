<? if(is_mobile() === true) : ?>
<div class="popup fixed" id="popup" data-popup="order">
<? else : ?>
<div class="popup absolute" id="popup" data-popup="order">
<? endif; ?>
  <div class="popup_close" id="close"></div>
  <div class="popup_box">
    <p class="popup_box__title">Хотите поработать с&nbsp;нами?</p>
    <p class="popup_box__caption">По&nbsp;условиям сотрудничества воспользуйтесь формой обратной связи или позвоните по&nbsp;телефону <span class="phone_bold">+7&nbsp;(3412)&nbsp;90-64-49</span></p>
    <? $block = module_invoke('webform', 'block_view', 'client-block-1');
                  print render($block['content']); ?>
  </div>
</div>

<header class="sect header">
  <div class="wrapper">
    <div class="content clearfix">
      <div class="site_logo">
        <a href="../" target="_self">
          <? if ($logo): ?>
            <img src="<? print $logo; ?>" alt="Дымофф"/>
          <? else: ?>
            <img src="../img/other/logotype.png" alt="Дымофф"/>
          <? endif; ?>
        </a>
      </div>
      <nav class="site_menu">
        <ul>
          <? foreach($main_menu as $key => $value) : ?>
          <? switch($value['href']){
                case 'node/12' : $value['href'] = 'guarantees';
                  break;
                case 'node/2' : $value['href'] = 'company';
                  break;
                case 'node/6' : $value['href'] = 'contacts';
                  break;
                default : break;
             } 
          ?>
            <? if($value['href'] == 'node/12') $value['href'] = 'guarantees'; ?>
            <? if(!empty($value['attributes']['class'][0])) : ?>
              <li class="active"><a href="../<?=$value['href'];?>" target="_self"><?=$value['title'];?></a></li>
            <? else : ?>
              <li <?=is_url_active($_SERVER['REQUEST_URI'],$value['href']);?>><a href="../<?=$value['href'];?>" target="_self"><?=$value['title'];?></a></li>
            <? endif; ?>
          <? endforeach; ?>
        </ul>
      </nav>
    </div>
  </div>
</header>