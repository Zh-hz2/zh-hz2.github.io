        $(document).ready(function() {
            // Update price range value
            $('#priceRange').on('input', function() {
                $('#priceValue').text(this.value);
            });

            // Filter by category
            $('.filter-category').click(function() {
                var category = $(this).data('category');
                $('#productTableBody tr').each(function() {
                    if ($(this).find('td:eq(1)').text() === category || category === "All") {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            });

            // Filter by price
            $('#filterPriceButton').click(function() {
                var maxPrice = $('#priceRange').val();
                $('#productTableBody tr').each(function() {
                    var price = parseInt($(this).find('td:eq(2)').text());
                    if (price <= maxPrice) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            });

            // Sort by price
            $('.sort').click(function() {
                var sortOrder = $(this).data('order');
                var rows = $('#productTableBody tr').get();
                rows.sort(function(a, b) {
                    var A = parseInt($(a).find('td:eq(2)').text());
                    var B = parseInt($(b).find('td:eq(2)').text());
                    if (A < B) {
                        return sortOrder === 'asc' ? -1 : 1;
                    }
                    if (A > B) {
                        return sortOrder === 'asc' ? 1 : -1;
                    }
                    return 0;
                });
                $.each(rows, function(index, row) {
                    $('#productTableBody').append(row);
                });
                $(this).data('order', sortOrder === 'asc' ? 'desc' : 'asc');
            });
        });
