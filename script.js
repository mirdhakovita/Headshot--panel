const canvas = new fabric.Canvas('canvas');

upload.onchange = function(e){
  const reader = new FileReader();
  reader.onload = function(event){
    fabric.Image.fromURL(event.target.result, function(img){
      img.scaleToWidth(350);
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });
  }
  reader.readAsDataURL(e.target.files[0]);
};

function addText(){
  const text = new fabric.Textbox('Your Name', {
    left: 50,
    top: 50,
    fill: document.getElementById('color').value,
    fontSize: document.getElementById('size').value
  });
  canvas.add(text);
}

function headshot(){
  const text = new fabric.Textbox('HEADSHOT 🔥', {
    left: 50,
    top: 150,
    fill: 'red',
    fontSize: 40,
    fontWeight: 'bold',
    shadow: "0 0 20px red"
  });
  canvas.add(text);
}

function deleteObj(){
  const obj = canvas.getActiveObject();
  if(obj) canvas.remove(obj);
}

function download(){
  const link = document.createElement('a');
  link.href = canvas.toDataURL();
  link.download = "panel.png";
  link.click();
}
