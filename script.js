document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form processing
            const eventSelect = document.getElementById('event');
            const ticketType = document.getElementById('ticket-type');
            const quantity = document.getElementById('quantity');
            const name = document.getElementById('name');
            
            if (eventSelect.value && ticketType.value && quantity.value && name.value) {
                alert('Terima kasih! Tiket Anda sedang diproses. Kami akan mengirim detail pembayaran ke email Anda.');
                bookingForm.reset();
            } else {
                alert('Silakan lengkapi semua field yang diperlukan.');
            }
        });
    }
});
