document.getElementById('description').addEventListener('input', function() {
    const markdownText = this.value;
    const html = marked.parse(markdownText);
    document.getElementById('preview').innerHTML = html;
});  