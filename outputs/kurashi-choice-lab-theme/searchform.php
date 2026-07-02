<?php
/**
 * Search form.
 *
 * @package Kurashi_Choice_Lab
 */
?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php esc_html_e( '検索:', 'kurashi-choice-lab' ); ?></span>
		<input type="search" class="search-field" placeholder="<?php esc_attr_e( 'キーワードを入力', 'kurashi-choice-lab' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" name="s">
	</label>
	<button type="submit" class="button small"><?php esc_html_e( '検索', 'kurashi-choice-lab' ); ?></button>
</form>
