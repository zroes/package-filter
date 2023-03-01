function Package(priorityLevel, isFragile, weight, to, trackingNumber) {
  this.priorityLevel = priorityLevel;
  this.isFragile = isFragile;
  this.weight = weight;
  this.to = to;
  this.trackingNumber = trackingNumber;
}

const packages = [
  new Package('express', false, 2, 'Harrington IV', '1324kjs'),
  new Package('standard', true, .5, 'Master Mercutio', '1325sdk'),
  new Package('free', true, .5, 'Mistress Ravenfeather', 'jffd147'),
  new Package('standard', false, 4, 'Robert Brown', 'acdc145'),
  new Package('express', true, 6, 'Chancellor Wallace', '4b2l0z'),
  new Package('standard', false, 5, 'Sarah Sharm', '8081baz'),
  new Package('free', true, 12, 'Tae Lien', 'suz2367')
]

function isHeavy(package) {
  if (package.weight > 2) {
    return true;
  }
  return false;
}

function isPriority(package) {
  if (package.priorityLevel === 'express') {
    return true;
  }
  return false;
}

let filterHeavy = false;
let filterFragile = false;
let filterPriority = false;
function toggleFilter(filter) {
  switch (filter) {
    case 'heavy':
      filterHeavy = !filterHeavy;
      document.getElementById('heavy')?.classList.toggle('invert');
      break;
    case 'fragile':
      filterFragile = !filterFragile;
      document.getElementById('fragile')?.classList.toggle('invert');
      break;
    case 'priority':
      filterPriority = !filterPriority;
      document.getElementById('priority')?.classList.toggle('invert');
      break;
  }
  console.log('heavy:', filterHeavy)
  console.log('fragile', filterFragile)
  console.log('priority', filterPriority)
  filterAll(filterHeavy, filterFragile, filterPriority)
}

function toggleBackground() {
  ;
}

function filterAll(filterHeavy, filterFragile, filterPriority) {
  let filteredPackages = packages;
  if (filterHeavy) {
    filteredPackages = filteredPackages.filter(p => isHeavy(p));
  }
  if (filterFragile) {
    filteredPackages = filteredPackages.filter(p => p.isFragile);
  }
  if (filterPriority) {
    filteredPackages = filteredPackages.filter(p => isPriority(p))
  }
  console.log(filteredPackages)
  drawPackages(filteredPackages);
}

// function filterHeavyFunc() {
//   let heavyPackages = packages.filter(p => isHeavy(p));
//   drawPackages(heavyPackages);
// }

// function filterPriorityFunc() {
//   let priorityPackages = packages.filter(p => isPriority(p));
//   drawPackages(priorityPackages)
// }

// function filterFragileFunc() {
//   let fragilePackages = packages.filter(p => p.isFragile);
//   drawPackages(fragilePackages)
// }

function drawPackages(packs) {
  let packageElem = document.getElementById('packages')
  let template = '';
  packs.forEach(p => {
    template +=
      `
    <div class="row border border-white border-3 m-5 color-lime">
      <div class="col-1 p-3">
        <h4 class="mb-0 fs-2">TO:</h4>
      </div>
      <div class="col-6 p-3">
        <h3 class="fs-2 mb-0 color-white text-uppercase">${p.to}</h3>
      </div>
      <div class="col-1 p-3">
        <h4 class="fs-2 mb-0">ID:</h4>
      </div>
      <div class="col-3 p-3">
        <h3 class="fs-2 mb-0 color-white text-uppercase text-end">${p.trackingNumber}</h3>
      </div>
    </div>`
  })

  packageElem.innerHTML = template
}

drawPackages(packages)