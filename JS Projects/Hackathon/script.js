function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// section uploading 
const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('photoPreview');
const uploadBtn = document.getElementById('uploadBtn');
const popupModal = document.getElementById('popupModal');

photoInput.addEventListener('change', function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      photoPreview.src = reader.result;
      photoPreview.style.display = 'block';
      uploadBtn.disabled = false;
    };
    reader.readAsDataURL(file);
  } else {
    photoPreview.src = '';
    photoPreview.style.display = 'none';
    uploadBtn.disabled = true;
  }
});

uploadBtn.addEventListener('click', function () {
  // Show popup modal
  popupModal.style.display = 'block';

  // Reset form
  photoInput.value = "";
  photoPreview.src = "";
  photoPreview.style.display = "none";
  uploadBtn.disabled = true;
});

function closePopup() {
  popupModal.style.display = 'none';
}


// Initialize Leaflet map
// Initialize Leaflet Map
const map = L.map('map').setView([22.8046, 86.2029], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load from localStorage
const reports = JSON.parse(localStorage.getItem('mapReports')) || [];

function addMarker(report) {
  L.marker(report.coords).addTo(map)
    .bindPopup(`<strong>${report.description}</strong>`);
}

reports.forEach(addMarker);

// Form submission
document.getElementById('mapReportForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const desc = document.getElementById('description').value.trim();
  if (!desc) return alert("Please enter a description.");

  if (!navigator.geolocation) {
    alert("Geolocation not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const coords = [pos.coords.latitude, pos.coords.longitude];
      const newReport = { description: desc, coords: coords };

      reports.push(newReport);
      localStorage.setItem('mapReports', JSON.stringify(reports));
      addMarker(newReport);

      map.setView(coords, 16);
      document.getElementById('description').value = '';

      // Show confirmation popup
      document.getElementById('mapPopupModal').style.display = 'block';
    },
    () => alert("Could not retrieve your location.")
  );
});

// Close popup function
function closeMapPopup() {
  document.getElementById('mapPopupModal').style.display = 'none';
}


// GEOLOCATION JS

document.getElementById('getLocationBtn').addEventListener('click', () => {
  const status = document.getElementById('geoStatus');
  const latSpan = document.getElementById('latitude');
  const longSpan = document.getElementById('longitude');

  status.textContent = "Getting your location...";

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      latSpan.textContent = position.coords.latitude.toFixed(6);
      longSpan.textContent = position.coords.longitude.toFixed(6);
      status.textContent = "✅ Location retrieved successfully.";
    },
    (error) => {
      status.textContent = "❌ Failed to retrieve location.";
      console.error(error);
    }
  );
});


// ANOTHER GEO JS 
let geoMap, geoMarker;

document.getElementById("showMapLocationBtn").addEventListener("click", () => {
  const status = document.getElementById("mapStatus");

  if (!navigator.geolocation) {
    status.textContent = "Geolocation not supported by your browser.";
    return;
  }

  status.textContent = "Getting your location...";

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      if (!geoMap) {
        geoMap = L.map("userMap").setView([lat, lng], 16);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(geoMap);
      } else {
        geoMap.setView([lat, lng], 16);
      }

      if (geoMarker) geoMap.removeLayer(geoMarker);
      geoMarker = L.marker([lat, lng]).addTo(geoMap).bindPopup("📍 You are here").openPopup();

      // Save to hidden attributes (if needed for storage)
      geoMarker.lat = lat;
      geoMarker.lng = lng;

      status.textContent = `✅ Located: Latitude ${lat.toFixed(5)}, Longitude ${lng.toFixed(5)}`;
    },
    () => {
      status.textContent = "❌ Unable to retrieve your location.";
    }
  );
});

document.getElementById("geoSubmitBtn").addEventListener("click", () => {
  const description = document.getElementById("geoDescription").value;

  if (!geoMarker || !description.trim()) {
    alert("Please get your location and enter a description before submitting.");
    return;
  }

  // Simulated submission process
  console.log("Report submitted:", {
    description,
    latitude: geoMarker.lat,
    longitude: geoMarker.lng,
  });

  // Show popup
  document.getElementById("geoPopup").style.display = "block";
});

function closeGeoPopup() {
  document.getElementById("geoPopup").style.display = "none";
}


// report page js 
document.getElementById("issueForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // simulate storing logic
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const type = document.getElementById("issueType").value;

  // simulate storing to localStorage (optional)
  const reportData = { name, address, type, timestamp: new Date().toISOString() };
  const reports = JSON.parse(localStorage.getItem("issues")) || [];
  reports.push(reportData);
  localStorage.setItem("issues", JSON.stringify(reports));

  // show confirmation popup
  const popup = document.getElementById("issueFormPopup");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
    document.getElementById("issueForm").reset();
  }, 3000);
});


