const item = `<item>
<title>
Bộ ảnh tình yêu của cặp vợ chồng nông dân hút 16 nghìn like
</title>
<description>
<![CDATA[
<a href="https://giadinh.vnexpress.net/photo/to-am/bo-anh-tinh-yeu-cua-cap-vo-chong-nong-dan-hut-16-nghin-like-3644311.html"><img width=130 height=100 src="https://i-giadinh.vnecdn.net/2017/09/20/34_180x108.jpg" ></a></br>25 năm trước, ba mẹ về ở với nhau mà không có được đám cưới đàng hoàng, Bình quyết tâm chụp tặng ba mẹ một ảnh thật tình cảm.
]]>
</description>
<pubDate>Wed, 20 Sep 2017 16:56:44 +0700</pubDate>
<link>
https://giadinh.vnexpress.net/photo/to-am/bo-anh-tinh-yeu-cua-cap-vo-chong-nong-dan-hut-16-nghin-like-3644311.html
</link>
<guid>
https://giadinh.vnexpress.net/photo/to-am/bo-anh-tinh-yeu-cua-cap-vo-chong-nong-dan-hut-16-nghin-like-3644311.html
</guid>
<slash:comments>0</slash:comments>
</item>`;

function getBody(rawStr, pre, post) {
    const startIndex = rawStr.lastIndexOf(pre) + pre.length;
    const endIndex = rawStr.indexOf(post);
    return rawStr.substring(startIndex, endIndex).trim();
}

// console.log(getBody(item, '<title>', '</title>'));// 
function getTinFromItem(rawItem) {
    const title = getBody(rawItem, '<title>', '</title>');
    const description = getBody(rawItem, '</a></br>', ']]>');
    const link = getBody(rawItem, '<link>', '</link>');
    const image = getBody(rawItem, 'src="', '" ></a></br>');
    const id = getBody(link, '-', '.html');
}

getTinFromItem(item);
