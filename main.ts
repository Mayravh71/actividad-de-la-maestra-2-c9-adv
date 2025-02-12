player.onChat("generar", function () {
    mobs.spawn(SQUID, agent.getPosition())
    mobs.spawn(DOLPHIN, agent.getPosition())
    mobs.spawn(SEA_TURTLE, agent.getPosition())
})
player.onChat("agua", function () {
    for (let index = 0; index < 10; index++) {
        agent.move(DOWN, 1)
        blocks.fill(
        WATER,
        agent.getPosition(),
        positions.add(
        agent.getPosition(),
        pos(-8, 0, 8)
        ),
        FillOperation.Keep
        )
    }
})
player.onChat("regresa", function () {
    agent.teleport(pos(0, 0, 0), WEST)
})
player.onChat("torre", function () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 5)
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 4; index++) {
            agent.setItem(GLASS, 20, 1)
            agent.move(FORWARD, 10)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
    }
    agent.move(FORWARD, 1)
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(LEFT, 1)
})
