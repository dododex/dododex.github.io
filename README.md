# Dododex
<a href="http://www.dododex.com">Taming Calculator for Ark: Survival Evolved</a>

## Editing Ark Creature/Item Spawn Codes

**To contribute:**

1. Open [bp.json](https://github.com/dododex/dododex/blob/master/bp.json)
2. Click "Edit"
3. Add new blueprints to the end of the file matching the file's format. (Order does not matter)

**Attributes:**

| Attribute | Description | Details |
| -- | -- | -- |
| **t** | Type (Category) | One of the pre-defined categories listed on the admin page. |
| **cid** | Creature ID | Dododex's creature ID (the ID is listed the end of its Dododex profile URL: dododex.com/taming/raptor = raptor) |
| **label** | Name of the item/creature | Should match the in-game name unless the in-game is not consistent. For example, "Turtle Egg" shoudl be "Carbonemys Egg." |
| **id** | Blueprint ID | As listed in the Dev Kit |
| **bp** | Blueprint Path | All blueprints are prepended with `/Game/` |
| **g** | GFI  | A working phrase to use in a GFI command. For example, Allosaurus Kibble	would be "Kibble_Allo" |

## Editing Ark Admin Commands 

**To contribute:**

1. Open [commands.json](https://github.com/dododex/dododex/blob/master/commands.json)
2. Click "Edit"
3. Add new commands to the end of the file matching the file's format. (Order does not matter)

**Attributes:**

| Attribute | Description | Details |
| -- | -- | -- |
| **id** | Command | One of the pre-defined categories listed on the admin page. [Please contact me](https://discord.gg/KvmRSSV) to suggest new ones or changes |
| **c** | Full command with arguements | Command followed by each argument in brackets. |
| **e** | Example command | A working example. |
| **t** | Type (Category) | One of the pre-defined categories listed on the admin page.  |
| **d** | Description | A short description about what the command does. Written in gramtically correct English. |

# Contribute Mod Commands!
Mod owners (or mod users): Want your commands added to Dododex. Add them to the `bp.json` file with your Mod's name as the `t` attribute. If your mod has a large number of items and/or dinos. Please join the Dododex Discord and chat with Dan first. Thanks!

# Questions?

[Join Dododex's Discord](https://discord.gg/KvmRSSV) to chat or discuss this project!

