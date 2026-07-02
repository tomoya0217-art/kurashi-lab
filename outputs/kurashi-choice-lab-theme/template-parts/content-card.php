<?php
/**
 * Post card template part.
 *
 * @package Kurashi_Choice_Lab
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'article-card' ); ?>>
	<?php if ( has_post_thumbnail() ) : ?>
		<a class="card-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
			<?php the_post_thumbnail( 'medium_large' ); ?>
		</a>
	<?php endif; ?>
	<?php
	$category = get_the_category();
	if ( ! empty( $category ) ) :
		?>
		<span class="tag"><?php echo esc_html( $category[0]->name ); ?></span>
	<?php endif; ?>
	<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
	<p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 34 ) ); ?></p>
	<dl class="summary-list">
		<div><dt><?php esc_html_e( '公開日', 'kurashi-choice-lab' ); ?></dt><dd><?php echo esc_html( get_the_date() ); ?></dd></div>
		<div><dt><?php esc_html_e( 'カテゴリー', 'kurashi-choice-lab' ); ?></dt><dd><?php echo ! empty( $category ) ? esc_html( $category[0]->name ) : esc_html__( '未分類', 'kurashi-choice-lab' ); ?></dd></div>
	</dl>
	<a class="button small" href="<?php the_permalink(); ?>"><?php esc_html_e( '詳細を見る', 'kurashi-choice-lab' ); ?></a>
</article>
