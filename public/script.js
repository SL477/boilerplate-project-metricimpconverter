function convertData() {
    const result = document.getElementById('result');
    const jsonResult = document.getElementById('jsonResult');
    const convertField = document.getElementById('convertField');
    if (convertField && convertField.value) {
        fetch('/api/convert?input=' + convertField.value)
            .then((data) => data.json())
            .then((data) => {
                if (result && jsonResult) {
                    result.textContent = data.string || data;
                    jsonResult.textContent = JSON.stringify(data);
                }
            })
            .catch((ex) => console.error(ex));
    }
    return false;
}
