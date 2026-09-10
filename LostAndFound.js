<script>
document.addEventListener("DOMContentLoaded", function () {
  const recordsContainer = document.getElementById("recordsList");

  // 1. Load records from localStorage
  const records = JSON.parse(localStorage.getItem("lostFoundRecords")) || [];

  if (records.length === 0) {
    recordsContainer.innerHTML = "<p>No records found.</p>";
    return;
  }

  // 2. Dynamically create cards
  records.forEach((record) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.category = record.category;
    card.dataset.status = record.status.charAt(0).toUpperCase() + record.status.slice(1); // Capitalize first letter

    card.innerHTML = `
      <h3>${record.category}</h3>
      <p><strong>Description:</strong> ${record.description}</p>
      <p><strong>Date:</strong> ${record.date}</p>
      <p><strong>Location:</strong> ${record.location}</p>
      <p><strong>Owner:</strong> ${record.ownerName} | <strong>Contact:</strong> ${record.ownerNumber}</p>
      <span class="status badge ${record.status === "missing" ? "unclaimed" : "claimed"}">
        ${record.status === "missing" ? "Unclaimed" : "Claimed"}
      </span>
    `;
    recordsContainer.appendChild(card);
  });

  // 3. Filtering logic
  const categoryFilter = document.getElementById("categoryFilter");
  const statusFilter = document.getElementById("statusFilter");
  const searchBar = document.getElementById("searchBar");
  const filterButton = document.getElementById("filterToggle");
  const cards = document.querySelectorAll("#recordsList .card");

  function filterCards() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    const selectedStatus = statusFilter.value.toLowerCase();
    const query = searchBar.value.toLowerCase();

    cards.forEach(card => {
      const cardCategory = card.dataset.category.toLowerCase();
      const cardStatus = card.dataset.status.toLowerCase();
      const text = card.textContent.toLowerCase();

      const matchCategory = !selectedCategory || cardCategory === selectedCategory;
      const matchStatus = !selectedStatus || cardStatus === selectedStatus;
      const matchText = text.includes(query);

      const isMatch = matchCategory && matchStatus && matchText;
      card.style.display = isMatch ? "block" : "none";
    });
  }

  categoryFilter.addEventListener("change", filterCards);
  statusFilter.addEventListener("change", filterCards);
  searchBar.addEventListener("input", filterCards);

  filterButton.addEventListener("click", function () {
    categoryFilter.value = "";
    statusFilter.value = "";
    searchBar.value = "";
    cards.forEach(card => card.style.display = "block");
  });

  // 4. Toggle status
  const statusBadges = document.querySelectorAll(".card .status");

  statusBadges.forEach(badge => {
    badge.addEventListener("click", function () {
      const currentStatus = badge.textContent.trim();
      if (currentStatus === "Unclaimed") {
        badge.textContent = "Claimed";
        badge.classList.remove("unclaimed");
        badge.classList.add("claimed");
        badge.closest(".card").dataset.status = "Claimed";
      } else {
        badge.textContent = "Unclaimed";
        badge.classList.remove("claimed");
        badge.classList.add("unclaimed");
        badge.closest(".card").dataset.status = "Unclaimed";
      }
      filterCards(); // re-apply filter
    });
  });
});
</script>
