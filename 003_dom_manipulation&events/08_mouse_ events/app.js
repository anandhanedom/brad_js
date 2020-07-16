const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
// clearBtn.addEventListener('click', runEvent);

//Double click
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// Mouse up
// clearBtn.addEventListener('mouseup', runEvent);

//(Initial parent)
// Mouse enter
// card.addEventListener('mouseenter', runEvent);

// Mouse leave
// card.addEventListener('mouseleave', runEvent);

//(within parent)
//Mouse over
// card.addEventListener('mouseover', runEvent);

// Mouse out
// card.addEventListener('mouseout', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE : ${e.type}`);

  heading.textContent = `MouseX = ${e.offsetX} MouseY = ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}
