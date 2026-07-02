<?php
/**
 * Empty content template part.
 *
 * @package Kurashi_Choice_Lab
 */
?>
<section class="notice">
	<h2><?php esc_html_e( '記事が見つかりませんでした', 'kurashi-choice-lab' ); ?></h2>
	<p><?php esc_html_e( '検索キーワードを変えるか、カテゴリーから記事を探してください。', 'kurashi-choice-lab' ); ?></p>
	<?php get_search_form(); ?>
</section>
