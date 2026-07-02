<?php
/**
 * Front page template.
 *
 * @package Kurashi_Choice_Lab
 */

get_header();

$featured_query = new WP_Query( array(
	'posts_per_page'      => 3,
	'ignore_sticky_posts' => false,
) );
?>
<main>
	<section class="hero">
		<div class="hero-copy">
			<p class="eyebrow"><?php esc_html_e( '比較・レビュー・選び方ガイド', 'kurashi-choice-lab' ); ?></p>
			<h1><?php esc_html_e( '買ってから後悔しない、暮らしのアイテム選び。', 'kurashi-choice-lab' ); ?></h1>
			<p><?php esc_html_e( '家電、ガジェット、生活用品、暮らしのサービスを編集部目線で比較。メリットだけでなく注意点も整理し、あなたに合う選択肢を見つけやすくします。', 'kurashi-choice-lab' ); ?></p>
			<div class="hero-actions">
				<a class="button primary" href="<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ?: home_url( '/blog/' ) ); ?>"><?php esc_html_e( '最新記事を読む', 'kurashi-choice-lab' ); ?></a>
				<a class="button ghost" href="#ranking"><?php esc_html_e( 'おすすめ記事', 'kurashi-choice-lab' ); ?></a>
			</div>
		</div>
		<div class="hero-panel" aria-label="<?php esc_attr_e( '注目カテゴリー', 'kurashi-choice-lab' ); ?>">
			<div><span><?php esc_html_e( '今月の注目', 'kurashi-choice-lab' ); ?></span><strong><?php esc_html_e( 'スマホ料金', 'kurashi-choice-lab' ); ?></strong></div>
			<div><span><?php esc_html_e( '公開記事', 'kurashi-choice-lab' ); ?></span><strong><?php echo esc_html( wp_count_posts()->publish ); ?><?php esc_html_e( '本', 'kurashi-choice-lab' ); ?></strong></div>
			<div><span><?php esc_html_e( '重視する視点', 'kurashi-choice-lab' ); ?></span><strong><?php esc_html_e( '後悔しない選び方', 'kurashi-choice-lab' ); ?></strong></div>
		</div>
	</section>

	<section class="section">
		<div class="section-heading">
			<p class="eyebrow">Category</p>
			<h2><?php esc_html_e( '目的から探す', 'kurashi-choice-lab' ); ?></h2>
		</div>
		<div class="category-grid">
			<?php
			$categories = get_categories( array( 'number' => 4, 'hide_empty' => false ) );
			if ( $categories ) :
				foreach ( $categories as $category ) :
					?>
					<a class="category-card" href="<?php echo esc_url( get_category_link( $category ) ); ?>">
						<span><?php echo esc_html( $category->name ); ?></span>
						<strong><?php echo esc_html( $category->count ? sprintf( __( '%d件の記事', 'kurashi-choice-lab' ), $category->count ) : __( '選び方ガイド', 'kurashi-choice-lab' ) ); ?></strong>
						<p><?php echo esc_html( $category->description ?: __( '比較表と注意点をセットで確認できます。', 'kurashi-choice-lab' ) ); ?></p>
					</a>
					<?php
				endforeach;
			else :
				?>
				<a class="category-card" href="#"><span><?php esc_html_e( '家電', 'kurashi-choice-lab' ); ?></span><strong><?php esc_html_e( '時短と失敗しない設置確認', 'kurashi-choice-lab' ); ?></strong><p><?php esc_html_e( 'カテゴリーを作成すると自動で表示されます。', 'kurashi-choice-lab' ); ?></p></a>
				<?php
			endif;
			?>
		</div>
	</section>

	<section id="ranking" class="section tinted">
		<div class="section-heading">
			<p class="eyebrow">Recommended</p>
			<h2><?php esc_html_e( 'おすすめSEO記事', 'kurashi-choice-lab' ); ?></h2>
		</div>
		<div class="post-list">
			<?php
			if ( $featured_query->have_posts() ) :
				$index = 0;
				while ( $featured_query->have_posts() ) :
					$featured_query->the_post();
					?>
					<article class="post-card<?php echo 0 === $index ? ' featured' : ''; ?>">
						<div class="post-meta"><?php echo esc_html( get_the_date() ); ?></div>
						<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
						<p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 36 ) ); ?></p>
						<a class="text-link" href="<?php the_permalink(); ?>"><?php esc_html_e( '記事を読む', 'kurashi-choice-lab' ); ?></a>
					</article>
					<?php
					$index++;
				endwhile;
				wp_reset_postdata();
			endif;
			?>
		</div>
	</section>

	<section class="section disclosure">
		<h2><?php esc_html_e( 'アフィリエイト広告について', 'kurashi-choice-lab' ); ?></h2>
		<p><?php esc_html_e( '当サイトはアフィリエイトプログラムを利用しています。記事内のリンクから商品やサービスを購入すると、運営者に報酬が発生する場合があります。掲載内容は編集方針に基づき、読者の判断材料になる情報を優先して作成しています。', 'kurashi-choice-lab' ); ?></p>
	</section>
</main>
<?php
get_footer();
