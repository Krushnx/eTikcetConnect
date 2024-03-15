stops = ["Mumbai", "Panvel", "Pen", "Mahad", "Poladpur", "Khed", "Chiplun", "Sangameshwar", "Mangaon", "Goregaon", "Mandangad", "Dapoli", "Lanja", "Ratnagiri"]

routes = []

for i in range(len(stops)):
    for j in range(i + 1, len(stops)):
        route = stops[i] + "-" + stops[j]
        routes.append(route)

print("List of all possible routes:")
for route in routes:
    print(route)
