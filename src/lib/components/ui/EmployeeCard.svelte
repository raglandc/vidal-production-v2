<script lang="ts">
export let url: string;
export let description: string;
export let name: string;
export let role: string;

const roleFirstLetter = role[0];
const roleRemainder = role.substring(1, role.length);
</script>



<div class="card">
    <div class="employee-picture" style="background-image: url({url});">
    <h3 class="name">{name}</h3>
    </div>
    <p class="role"><span>{roleFirstLetter}</span>{roleRemainder}</p>
    <p class="description">{description}</p>
</div>  
<style>
    .card {
        font-size: var(--font-primary-mobile);
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 45rem;
    }
    .employee-picture {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 19.5rem;
        height: 19.5rem;
        border-radius: 50% 50%; 
        background-size: cover;
        background-position: center;
    }

    .name{
        background-color: var(--text-primary);
        color: var(--background-color);
        text-align: center;
        width: 65%;
        margin: 0;
        transform: translateY(40%);
        padding: 1.5rem;
        border-radius: var(--border-radius);
    }

    span {
        color: var(--primary-color);
    }

    .role {
        font-size: var(--font-h2-mobile);
        letter-spacing: 5px;
        margin: 13% auto 5%;
    }

    .description {
        margin: 3% 0 0;
        text-align: center;
        color: var(--text-secondary);
        width: 80%;
        line-height: 1.5;
    }
	@media only screen and (min-width: 1200px){

        .role {
            font-size: var(--font-h3-desktop);
            margin: 15% 0 0;
        }

        .description {
            font-size: var(--font-primary-desktop);
            width: 90%;
        }
	}
</style>